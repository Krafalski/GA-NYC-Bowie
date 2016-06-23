class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :img_url
      t.string :nationality

    end
  end
end
