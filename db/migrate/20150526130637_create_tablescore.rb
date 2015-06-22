class CreateTablescore < ActiveRecord::Migration
  def change
  	create_table :tablescores do |t|
  		t.string :joueur
  		t.string :score
  	end
  end
end
