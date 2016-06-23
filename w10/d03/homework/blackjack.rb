#Dealer Class
# hand which will be an array that updates every round

class Dealer
  attr_accessor:dealer_hand
  def initialize
    @dealer_hand = []
  end
end

#set new Dealer named a
# a = Dealer.new

#Player Class
# hand which will be an array that updates every round
# some money to win or lose
# wager amount
class Player
  attr_accessor:player_hand
  attr_accessor:total_money
  attr_accessor:wager
  def initialize
    @player_hand = []
    @total_money = 100
    @wager = 10
  end
end

#set new player named b
# b = Player.new




#Card Class
# each card will have
# a name 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, King, Queen, Ace
# a value 2, 3 , 4 , 5 , 6 , 7, 8 , 9 , 10
# both of the above should be attr_reader
# aces will default at value 10
#aces will need to be attr_writer? or just when their value is passed along in the game?
# a suit
#I am sure there is a much more efficent and better way create cards...but I don't have time to look it up!
class Card
  attr_reader:two
  attr_reader:three
  attr_reader:four
  attr_reader:five
  attr_reader:six
  attr_reader:seven
  attr_reader:eight
  attr_reader:nine
  attr_reader:ten
  attr_reader:jack
  attr_reader:queen
  attr_reader:king
  attr_accessor:ace
  attr_accessor:deck
  def initialize
    @two = {value:2}
    @three = {value:3}
    @four = {value:4}
    @five ={value:5}
    @six = {value:6}
    @seven ={value:7}
    @eight ={value:8}
    @nine = {value:9}
    @ten ={value:10}
    @jack ={value:10}
    @queen = {value:10}
    @king ={value:10}
    @ace = {value:10}
    @deck = [@two,@three, @four, @five, @six, @seven, @eight, @nine, @ten, @jack, @queen,@king,@ace]*4
  end
end

# works (as in throws no errors, not sure about if it will work for game play)
# c = Card.new
# access the value
#c.two[:value]





#Suits maybe have this as a sub class of Card, since all cards will have the same values, but different suits and then suits could have the super ?property?
# no time, will just make an array of generic cards * 4 sets of cards...

#Deck variable? or class? will want to create a new instance and then shuffle, so class????

# class Deck < Card
#
# end

# will be made up of an array of Cards 13 of each suit
# the cards need to be shuffled
# the cards will need to be popped off
# two cards to the Dealer
# two cards to the Player
# When there are none left, ask if to start a new deck?




#Game Play
# new instance of Dealer
dealer =  Dealer.new

# new instance of Player
player = Player.new

# new instance of Card?

# new instance of Deck
deck = Card.new
# shuffle and save deck
shuffled_deck = deck.deck.shuffle
# ask for wager?
# pop two cards off give them to Dealer
dealer.dealer_hand = shuffled_deck.pop(2)
# pop two cards off, give them to Player
player.player_hand = shuffled_deck.pop(2)
# display Dealer 1 card
# display Player both cards
# check for blackjack
dealer_play = dealer.dealer_hand[0][:value] + dealer.dealer_hand[1][:value]
-

# if no blackjack then
# give player option to stay or hit (add one more card)
#  if hit check for blackjack
# if stay then check
# if Dealer > Player - dealer wins, minus player money
# if Player > Dealer - player wins, plus player money
# if Dealer = Player - tie - no money change
# show player money, if player negative money, player loses!
# play again?
