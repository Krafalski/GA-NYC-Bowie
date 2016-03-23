class Automobile
  def initialize(wheel_count, color)  
    @position=0
    @wheel_count=wheel_count    
    @color=color    
  end  
  def drive(distance)
    @position = @position+distance
  end  
end  


class Car < Automobile
  #be careful with accessors
  attr_accessor :position
  def initialize(color)
    super(4,color)
  end  

end 