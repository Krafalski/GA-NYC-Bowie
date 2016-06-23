class WelcomeController < ApplicationController

def index
  @greeting = "helllllooooooo"
  #can do Welcome.find_by(greeting:"hello")
end

end
