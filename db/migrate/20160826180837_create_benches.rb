class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
  end
end
