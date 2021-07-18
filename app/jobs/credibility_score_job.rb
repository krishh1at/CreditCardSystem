class CredibilityScoreJob < ApplicationJob
  def perform(id)
    applicant = Applicant.find_by(id: id)
    score = Credibility.new(applicant).get_score if applicant
    applicant.update(credibility_score: score) if applicant && score.positive?
  end
end
