class CreateRaces < ActiveRecord::Migration[5.2]
  def change
    create_table :races do |t|
      t.string :name
      t.string :start_date
      t.string :end_date
      t.string :length
      t.string :left
      t.string :right

      t.timestamps
    end
  end
end
