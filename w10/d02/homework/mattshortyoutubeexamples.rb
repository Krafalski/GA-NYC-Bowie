class Cat
 TOE_COUNTS = [10,11,12,15]
 def initializer (catName)

  @my_name=catName
  @toes = TOE_COUNTS.sample
  end

  def meow
   return "MEEEOWw"
  end

  def lose_toe
  @toes -= 1
  end
#writer
  def name_change(new_name)
  @myname = new_name
  end
#reader
 def my_name
 @my_name
 end
 end

class Dog
  attr_reader :name
  attr_writer :age
  attr_accessor :color

  def initialize (name, age, color)
    @name = name
    @age = age
    @color = color
  end
end
