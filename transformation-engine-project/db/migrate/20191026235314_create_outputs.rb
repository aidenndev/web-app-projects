class CreateOutputs < ActiveRecord::Migration[6.0]
  def change
    create_table :outputs do |t|
      t.string :output_name
      t.string :output_type
      t.references :transformation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
