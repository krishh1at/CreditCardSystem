class Api::V1::ApplicantsController < ApplicationController
  def index
    applicants = Applicant.pending

    render json: applicants
  end


  def create
    applicant = Applicant.new(applicant_params)

    if applicant.save
      render json: applicant
    else
      render json: ({ errors: applicant.errors.full_messages })
    end
  end

  def update
    if applicant.update(applicant_params)
      render json: applicant
    else
      render json: ({ errors: applicant.errors.full_messages })
    end
  end

  private

  def applicant_params
    params.require(:applicant).permit(
      :email,
      :pan_number,
      :aadhar_number,
      :account_number,
      :ifs_code,
      :monthly_recurring_inflow,
      :monthly_recurring_outflow,
      :approved
    )
  end

  def applicant
    @applicant ||= Applicant.find(params[:id])
  end
end
