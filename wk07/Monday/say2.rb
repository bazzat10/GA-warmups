require 'pry'

class Say
  def self.new(int)
    num_to_name = {
     90 => "ninety",
     80 => "eighty",
     70 => "seventy",
     60 => "sixty",
     50 => "fifty",
     40 => "forty",
     30 => "thirty",
     20 => "twenty",
     19=>"nineteen",
     18=>"eighteen",
     17=>"seventeen",
     16=>"sixteen",
     15=>"fifteen",
     14=>"fourteen",
     13=>"thirteen",
     12=>"twelve",
     11 => "eleven",
     10 => "ten",
     9 => "nine",
     8 => "eight",
     7 => "seven",
     6 => "six",
     5 => "five",
     4 => "four",
     3 => "three",
     2 => "two",
     1 => "one"
   }

   str = ""

   num_to_name.each do |num, word|
     if int == 0
       return str
     elsif int.to_s.length == 1
       return str + "#{word}"
     end
   end
 end
end


binding.pry



# num_to_name.each do |num, name|
#   if int == 0
#     return str
#   elsif int.to_s.length == 1 && int/num > 0
#     return str + "#{name}"
#   elsif int < 100 && int/num > 0
#     return str + "#{name}" if int%num == 0
#     return str + "#{name} " + in_words(int%num)
#   elsif int/num > 0
#     return str + in_words(int/num) + " #{name} " + in_words(int%num)
#   end
# end



# Gerards Code
#
# class Say
#   @@number = {
#     1=> "one",
#     2=> "two",
#     3=> "three",
#     4=> "four",
#     5=> "five",
#     6=> "six",
#     7=> "seven",
#     8=> "eight",
#     9=> "nine"
#   }
#   @@teens = {
#     11=> "eleven",
#     12=> "twelve",
#     13=> "thirteen",
#     14=> "fourteen",
#     15=> "fifteen",
#     16=> "sixteen",
#     17=> "seventeen",
#     18=> "eighteen",
#     19=> "nineteen"
#   }
#   @@tens = {
#     2=> "twenty",
#     3=> "thirty",
#     4=> "forty",
#     5=> "fifty",
#     6=> "sixty",
#     7=> "seventy",
#     8=> "eighty",
#     9=> "ninety"
#   }
#
#   def initialize number
#     @number = number
#   end
#
#   def in_english
#     num_array = @number.split("").map { |x| x.to_i  }
#     num_array_length = num_array.length
#     word = []
#
#     if num_array_length == 1
#       word << @@number[num_array[0]]
#     elsif num_array_length == 2
#       if num_array[0] == 1
#       word << @@teens[@number.to_i]
#       else
#         word << @@tens[num_array[0]]
#         word << @@number[num_array[1]]
#       end
#     end
#     return word.join(" ")
#   end
# end
#
# loop do
#   print 'Put a number in which you want to conver to words: '
#   number = gets.chomp
#   puts Say.new(number).in_english
# end
