class Animal
  attr_reader:name
  def initialize (name, species)
    @name = name
    @species = species
    @toys = []
  end
  def give_toy (toy)
    @toys.push(toy)
  end
end


#test code :
#a = Animal.new "wolfy" , "wolf"
#a.give_toy ("dinosaur")
#a.give_toy ("bone")
