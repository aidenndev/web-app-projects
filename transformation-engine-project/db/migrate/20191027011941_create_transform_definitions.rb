class CreateTransformDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :transform_definitions do |t|
      t.string :name, :default => ""
      t.text :description, :default => ""
      t.references :transformation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
