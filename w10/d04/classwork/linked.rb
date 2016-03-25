class Stack
  attr_accessor :stack
  attr_reader :length
  def initialize
    @stack = []
  end

  def push (something)
    @stack = @stack.push (something)
  end

  def pop
     @stack.pop
  end

  def isEmpty?
    #if @stack == []
      #puts "this stack is empty"
      @stack.empty?
    end
  end

  def size
    @length = @stack.length
  end

end

class Node < Stack
  attr_accessor :current
  attr_accessor :next # is this how to ref it?
  def initialize (currentvalue)
   @current = currentvalue

  end
end

#
# Peter's solution  next node default next_node=nil
class Node
  atter_accessor :value, :next_node
  def initialize (value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

# console
# first = Node.new("first")
#second = Node.new('second', first)
#third = Node.new ('third', second)
#

#build up
class Stack
class Node
  atter_accessor :value, :next_node
  def initialize (value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end
def initialize
  @first = nil
end
  def is_empty?
    @first.nil?
  end

  def size
    @size = 0
  end

  def push(value)
    if is_empty?
      @size +=1
      @first = Node.new(value, nil)
    else
      old_first = @first
      @first =  Node.new(value)
      old_first.next_node = @first

    end

      def pop
    end


    end
