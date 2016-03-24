# Comments
# require "./path/to/file.rb"
# require_relative "file"


puts "Loading Methods..."

def my_first_method
 return [true, false].sample
end
# def end blocks let us define Methods


#Options hashes!

def optional (one, two, opts={})
  puts one
  puts two
  puts opts
end

def say_it(str, opts ={})
  result = str

  if opts[:shout]
    result= result.upcase
  end

  if opts[:reverse]
    result = result.reverse
  end

  return result
end

val_one = 0
val_two = 0
opts = 'str'

puts "methods available..."

# puts "give me a number"
# gets val_one
# puts "give me another number"
# gets val_two
# puts "type add, subtract, multiply or divide"
# gets opts

# def calculator (val_one, val_two, opts={})
#   results=0
#
#   if opts[:add]
#     result = val_one + val_two
#
# elsif opts[:subtract]
#     result = val_one - val_two
#
# elsif opts[:multiply]
#     result = val_one * val_two
# elsif opts[:divide]
#     result = val_one * val_two
#
# else
#   puts 'there was an error!'
# end
#  return result
# end
