require 'test_helper'

class TransformDefinitionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transform_definition = transform_definitions(:one)
  end

  test "should get index" do
    get transform_definitions_url
    assert_response :success
  end

  test "should get new" do
    get new_transform_definition_url
    assert_response :success
  end

  test "should create transform_definition" do
    assert_difference('TransformDefinition.count') do
      post transform_definitions_url, params: { transform_definition: { description: @transform_definition.description, name: @transform_definition.name, transformation_id: @transform_definition.transformation_id } }
    end

    assert_redirected_to transform_definition_url(TransformDefinition.last)
  end

  test "should show transform_definition" do
    get transform_definition_url(@transform_definition)
    assert_response :success
  end

  test "should get edit" do
    get edit_transform_definition_url(@transform_definition)
    assert_response :success
  end

  test "should update transform_definition" do
    patch transform_definition_url(@transform_definition), params: { transform_definition: { description: @transform_definition.description, name: @transform_definition.name, transformation_id: @transform_definition.transformation_id } }
    assert_redirected_to transform_definition_url(@transform_definition)
  end

  test "should destroy transform_definition" do
    assert_difference('TransformDefinition.count', -1) do
      delete transform_definition_url(@transform_definition)
    end

    assert_redirected_to transform_definitions_url
  end
end
