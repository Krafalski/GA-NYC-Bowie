require 'pry'
require_relative "animal"
require_relative "client"
require_relative "shelter"

#load in pry :
# load ('./main.rb')

#call this to have access to this scope that is loaded- maybe?

happy_tails = Shelter.new ("Happy Tails")


wolfy = Animal.new "Wolfy", "Wolf"
sharky = Animal.new "Sharky", "Great White"
wash = Client.new "Wash", 30
happy_tails.add_a wolfy
happy_tails.add_a sharky
happy_tails.add_c wash

# create a loop the one
begin
  puts "choose 1 to create an animal, 2 to create a client, 3 to display animals, 4 to display clients, 5 to adopt, 6 to give up an animal, 7 to quit"
  choice = gets
  choice.chomp!

  if choice == "1"
    add_animal = gets
    add_animal.chomp!
    puts "Animal added"
    puts add_animal

    #store animal name & chomp
    #puts enter species
    #store animal speices & chomp
  elsif choice =="2"
    add_client = gets
    add_client.chomp!
    puts "Client added"
    puts add_client
    #puts enter name
    #store client name & chomp
   #exit the program
 elsif choice =="3"
   puts "All the animals"
   puts happy_tails.animals[0]
   #store client name & chomp
  #exit the program
elsif choice =="4"
  puts "All the clients"
  puts happy_tails.clients
  #puts enter name
  #store client name & chomp
 #exit the program
elsif choice =="5"
  puts "Enter Client to adopt, enter animal to adopt"
  #puts enter name
  #store client name & chomp
 #exit the program
elsif choice =="6"
  puts "Enter animal to give up, enter from which client"
  #puts enter name
  #store client name & chomp
 #exit the program
  else
    puts 'there was an error'
  end
end until choice =="7"



binding.pry
