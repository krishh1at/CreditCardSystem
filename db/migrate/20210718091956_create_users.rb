class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string  :email,               null: false
      t.string  :aadhar_number,       null: false
      t.string  :pan_number,          null: false
      t.integer :approved_loan_count, null: false, default: 0

      t.timestamps null: false
    end
  end
end
