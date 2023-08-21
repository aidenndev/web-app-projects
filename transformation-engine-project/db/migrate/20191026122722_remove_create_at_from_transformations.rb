class RemoveCreateAtFromTransformations < ActiveRecord::Migration[6.0]
  def change

    remove_column :transformations, :create_at, :datetime
  end
end
