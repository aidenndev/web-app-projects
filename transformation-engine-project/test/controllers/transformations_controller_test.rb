require 'test_helper'

class TransformationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transformation = transformations(:one)
  end

  test "should get index" do
    get transformations_url
    assert_response :success
  end

  test "should get new" do
    get new_transformation_url
    assert_response :success
  end

  test "should create transformation" do
    assert_difference('Transformation.count') do
      post transformations_url, params: { transformation: { complete: @transformation.complete, create_at: @transformation.create_at, description: @transformation.description, name: @transformation.name, user_id: @transformation.user_id } }
    end

    assert_redirected_to transformation_url(Transformation.last)
  end

  test "should show transformation" do
    get transformation_url(@transformation)
    assert_response :success
  end

  test "should get edit" do
    get edit_transformation_url(@transformation)
    assert_response :success
  end

  test "should update transformation" do
    patch transformation_url(@transformation), params: { transformation: { complete: @transformation.complete, create_at: @transformation.create_at, description: @transformation.description, name: @transformation.name, user_id: @transformation.user_id } }
    assert_redirected_to transformation_url(@transformation)
  end

  test "should destroy transformation" do
    assert_difference('Transformation.count', -1) do
      delete transformation_url(@transformation)
    end

    assert_redirected_to transformations_url
  end
end
