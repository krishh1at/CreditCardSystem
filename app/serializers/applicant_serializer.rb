class ApplicantSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :email,
    :approval_recommendation,
    :credit_limit
  )
end
