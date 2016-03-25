class SongsController < ApplicationController

  before_action :authenticate

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end

  def new
    @song = Song.new
    @artists = Artist.all
  end

  def create
    @song = Song.new(song_params)
    if @song.save 
      redirect_to song_path(@song)
    else
      redirect_to new_song_path
    end
  end

  def edit
    @song = Song.find(params[:id])
    @artists = Artist.all
  end

  def update
    @song = Song.find(params[:id])
    @song.update(song_params)
    redirect_to song_path(@song)
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to songs_path
  end

  private

  def song_params
    params.require(:song).permit(:title, :album, :preview_url, :artwork, :price, :artist_id)
  end

end