require "faraday"

class Credibility
  def initialize(applicant)
    @applicant = applicant
    @response = fetch_info(@applicant.email)
    @score = 0
  end

  def get_score
    if @response["status"] == 200
      @score += 1 if presence_of("socialProfiles", "type", "linkedin")
      @score += 1 if presence_of("socialProfiles", "type", "facebook")
      @score += 1 if presence_of("socialProfiles", "type", "twitter")
    end

    @score += 1 if @applicant.user&.approved_loan_count

    @score
  end

  private

  def fetch_info(email)
    credential ||= Rails.application.credentials.config[:full_contact]

    response = Faraday.get(
      credential[:end_point],
      { email: email },
      { credential[:header] => credential[:api_key] }
    )

    JSON.parse(response.body)
  end

  def presence_of(parent_field, field, value)
    parent_objects = @response[parent_field]
    parent_objects.select { |p| p[field] == value }.present? if parent_objects.present?
  end
end
