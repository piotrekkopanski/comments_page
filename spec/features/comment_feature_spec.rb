require 'rails_helper'

RSpec.feature 'Comment' , :type => :feature do
  describe 'One comment on the list', js: true do
    before do
      Capybara.current_driver = :selenium
      FactoryBot.create(:comment, description: "Comment 1")
    end

    it 'shows index comment page' do
      visit('http://localhost:3000')
      expect(page).to have_content("Comment 1")
      expect(Comment.where( description: "Comment 1")).to exist
    end

    it 'edit comment'  do
      visit('http://localhost:3000')
      click_button('Edit', :visible => false)
      find("input[type=text]").set('Other comment')
      click_button 'Submit'
      expect(page).to have_content "Other comment"
      expect(Comment.where( description: "Comment 1")).not_to exist
      expect(Comment.where( description: "Other comment")).to exist
    end

    it 'destroy comment' do
      visit('http://localhost:3000')
      click_button 'X'
      expect(page).not_to have_content "Comment 1" && "Other comment"
      expect(page).to have_content "Add First Comment"
      expect(Comment.where( description: "Comment 1")).not_to exist
      expect(Comment.where( description: "Other comment")).not_to exist
    end

    it 'add comment' do
      visit('http://localhost:3000')
      find("textarea[class=new_comment]").set('Comment 3')
      click_button 'Comment'
      expect(page).to have_content "Comment 3"
      expect(Comment.where( description: "Comment 3")).to exist
    end

    it 'not allow to add empty comment' do
      visit('http://localhost:3000')
      click_button 'Comment'
      expect(page).to have_content "Comment can't be blank"
      expect(Comment.count).to eq(1)
    end
  end
end
