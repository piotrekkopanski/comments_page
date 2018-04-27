FactoryBot.define do
  factory :comment do
    description     { Faker::Name.name }
  end
end
