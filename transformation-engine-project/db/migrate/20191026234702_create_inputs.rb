class CreateInputs < ActiveRecord::Migration[6.0]
  def change
    create_table :inputs do |t|
      t.string :input_name, :default => ""
      t.string :input_type, :default => ""
      t.references :transformation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
