# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_27_011941) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inputs", force: :cascade do |t|
    t.string "input_name"
    t.string "input_type"
    t.bigint "transformation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["transformation_id"], name: "index_inputs_on_transformation_id"
  end

  create_table "outputs", force: :cascade do |t|
    t.string "output_name"
    t.string "output_type"
    t.bigint "transformation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["transformation_id"], name: "index_outputs_on_transformation_id"
  end

  create_table "transform_definitions", force: :cascade do |t|
    t.string "name", default: ""
    t.text "description", default: ""
    t.bigint "transformation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["transformation_id"], name: "index_transform_definitions_on_transformation_id"
  end

  create_table "transformations", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "complete"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_transformations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "inputs", "transformations"
  add_foreign_key "outputs", "transformations"
  add_foreign_key "transform_definitions", "transformations"
  add_foreign_key "transformations", "users"
end
