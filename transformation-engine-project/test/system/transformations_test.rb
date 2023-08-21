require "application_system_test_case"

class TransformationsTest < ApplicationSystemTestCase
  setup do
    @transformation = transformations(:one)
  end

  test "visiting the index" do
    visit transformations_url
    assert_selector "h1", text: "Transformations"
  end

  test "creating a Transformation" do
    visit transformations_url
    click_on "New Transformation"

    check "Complete" if @transformation.complete
    fill_in "Create at", with: @transformation.create_at
    fill_in "Description", with: @transformation.description
    fill_in "Name", with: @transformation.name
    fill_in "User", with: @transformation.user_id
    click_on "Create Transformation"

    assert_text "Transformation was successfully created"
    click_on "Back"
  end

  test "updating a Transformation" do
    visit transformations_url
    click_on "Edit", match: :first

    check "Complete" if @transformation.complete
    fill_in "Create at", with: @transformation.create_at
    fill_in "Description", with: @transformation.description
    fill_in "Name", with: @transformation.name
    fill_in "User", with: @transformation.user_id
    click_on "Update Transformation"

    assert_text "Transformation was successfully updated"
    click_on "Back"
  end

  test "destroying a Transformation" do
    visit transformations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Transformation was successfully destroyed"
  end
end
