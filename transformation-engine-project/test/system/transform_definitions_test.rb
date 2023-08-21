require "application_system_test_case"

class TransformDefinitionsTest < ApplicationSystemTestCase
  setup do
    @transform_definition = transform_definitions(:one)
  end

  test "visiting the index" do
    visit transform_definitions_url
    assert_selector "h1", text: "Transform Definitions"
  end

  test "creating a Transform definition" do
    visit transform_definitions_url
    click_on "New Transform Definition"

    fill_in "Description", with: @transform_definition.description
    fill_in "Name", with: @transform_definition.name
    fill_in "Transformation", with: @transform_definition.transformation_id
    click_on "Create Transform definition"

    assert_text "Transform definition was successfully created"
    click_on "Back"
  end

  test "updating a Transform definition" do
    visit transform_definitions_url
    click_on "Edit", match: :first

    fill_in "Description", with: @transform_definition.description
    fill_in "Name", with: @transform_definition.name
    fill_in "Transformation", with: @transform_definition.transformation_id
    click_on "Update Transform definition"

    assert_text "Transform definition was successfully updated"
    click_on "Back"
  end

  test "destroying a Transform definition" do
    visit transform_definitions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Transform definition was successfully destroyed"
  end
end
