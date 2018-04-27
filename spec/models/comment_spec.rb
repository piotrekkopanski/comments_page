require 'rails_helper'

RSpec.describe Comment, :type => :model do
  subject { described_class.new(description: "Comment 0") }

  describe "Validations" do
    it "is not valid without a description" do
      comment = Comment.new(description: nil)
      expect(comment).to_not be_valid
    end

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is valid with valid attributes" do
      should validate_presence_of(:description)
    end
  end

end