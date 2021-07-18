class CreateApplicants < ActiveRecord::Migration[6.1]
  def change
    create_table :applicants do |t|
      t.string  :email,                     null: false, limit: 255
      t.string  :pan_number,                null: false, limit: 10
      t.string  :aadhar_number,             null: false, limit: 12
      t.string  :account_number,            null: false, limit: 255
      t.string  :ifs_code,                  null: false, limit: 11
      t.decimal :monthly_recurring_inflow,  null: false, default: 0, precision: 30, scale: 2
      t.decimal :monthly_recurring_outflow, null: false, default: 0, precision: 30, scale: 2
      t.decimal :credibility_score,         null: false, default: 0, precision: 1
      t.boolean :approved

      t.timestamps null: false
    end
  end
end
