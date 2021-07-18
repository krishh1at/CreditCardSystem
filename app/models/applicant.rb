class Applicant < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze

  after_save :update_credibility_score
  after_update :create_user_record, if: -> { approved && saved_change_to_approved? }

  validates :account_number, presence: true
  validates :email,         presence: true, format: { with: VALID_EMAIL_REGEX }
  validates :pan_number,    presence: true, length: { is: 10 }
  validates :aadhar_number, presence: true, length: { is: 12 }
  validates :ifs_code,      presence: true, length: { is: 11 }

  scope :pending, -> { where(approved: nil) }

  def user
    User.find_by(aadhar_number: aadhar_number) || User.find_by(pan_number: pan_number)
  end

  def maximum_possible_emi
    maximum_possible_emi = (monthly_recurring_inflow / 2 - monthly_recurring_outflow)
  end

  def term_in_months
    return 0 if maximum_possible_emi.negative?

    case maximum_possible_emi
    when 0..5000
      6
    when 5001..10000
      12
    when 10001..20000
      18
    else
      24
    end
  end

  def credit_limit
    return 0 if maximum_possible_emi.negative?

    maximum_possible_emi * term_in_months
  end

  def approval_recommendation
    credibility_score >= 2
  end

  private

  def create_user_record
    user = self.user || User.new(
      email: email,
      aadhar_number: aadhar_number,
      pan_number: pan_number
    )

    user.approved_loan_count += 1
    user.save
  end

  def update_credibility_score
    CredibilityScoreJob.perform_later(id)
  end
end
