class Client
  def initialize (name, age)
    @name = name
    @age = age
    @animals = []
  end

  def adopt (animal)
    @animals.push(animal)
  end

  def give_up (animal)
    @animals.delete(animal)
  end

end

#test code
#b = Client.new "Karolin", 10000
