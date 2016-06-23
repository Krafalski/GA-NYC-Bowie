class Song < ActiveRecord::Base
  belongs_to :artist
  Has_and_belongs_to_many :playlists
 validates :title, :album, :preview_url, :artwork, presence true,
 validates :price, numericality: true, inclusion: { in: 1..9 }
end
