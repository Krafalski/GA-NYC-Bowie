class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :playlists, :songs do |t|
    end
  end
end
