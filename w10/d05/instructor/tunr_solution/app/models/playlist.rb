class Playlist < ActiveRecord::Base
  has_and_belongs_to_many :songs

  validates :name, presence: true
  validates :name, uniqueness: true

  #TODO check these figure out how these work
  def add_song(song)
    self.songs.push(song) unless self.songs.include?(song)
  end

  #TODO this to class methods
  def remove_song(song)
    self.songs.destroy(song) if self.songs.include?(song)
  end
end
