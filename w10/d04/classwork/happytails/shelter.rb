
class Shelter
  attr_reader:clients
  attr_reader:animals
  def initialize (name)
    @name = name
    @clients = []
    @animals = []
  end

  def add_a (animal)
    @animals.push(animal)
  end

  def add_c (client)
    @clients.push(client)
  end

  def save (animal, client)
    @animals.push (animal)
    client.give_up (animal)
    @clients.delete (client)
    #need to access client and remove animal from client
  end

  def adopt (animal, client)
    client.adopt (animal)
   @animals.delete (animal)
   @client.push (client)
   #need to access the client and add animal to client
 end
end
