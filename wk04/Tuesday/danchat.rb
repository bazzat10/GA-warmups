# Daniel
#
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.
#
# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.
#
# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.
#
# Hints
#
# gets, get string is the opposite of puts put string.
#
# Notice that when you type "Something" and then hit enter, you get the string "Something\n"
#
# loop do
#   # talk to Daniel here
# end
# Extensions
#
# l33t sP34k
#
# Daniel, inspired by the 90s, is bringing back "l33t sP34k", and he'll teach you how to do it. Start any sentence with "Bro, ", and he'll translate the rest of it into l33t sP34k for you.
#
# In brief:
#
# Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
# Words that start with a consonant start with lower case
# Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)

require 'fileutils' # standard libary
require 'pry' # because I need the debugging methods


talk = ''


while (talk = gets().chomp()) != 'quit' do
  puts('Speak to Daniel')
  # talk = gets().chomp
  last_char = talk[talk.length-1]
  comp_talk = talk[0..5]

  if last_char == '?'
    puts('Sure')
  end

  if talk == ''
   puts('Fine. Be that way')
  end

  if talk == talk.upcase
    puts('Woah, chill out!')
  else
       puts('Whatever')
  end

  # else
  #   case talk
  #   when ""
  #     puts('Fine. Be that way')
  #   when talk.upcase
  #       puts('Woah, chill out!')
  #   else
  #       puts('Whatever')
  #   end
  # end

  if comp_talk == 'Bro,'
    output = talk.tr('aeio', '4310')
    puts(output)
  end

end




# input.tr method - tr method - check each character and replaces the
# output = input.tr('aeio', '4310')
#
# solution from Kasun
#
# loop do
#   puts "What would you like to say to Daniel?"
#   input = gets.chomp
#
#   if input[0..4] == "Bro, "
#     output = input[5..-1].downcase
#     output = output.gsub(/[aeio]/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' => 0)
#     counter = 0
#     for i in 0...output.length
#       if output[i].match /[a-z]/
#         if counter == 1
#           output[i] = output[i].upcase
#         end
#         counter = (counter + 1) % 2
#       else
#         counter = 0
#       end
#     end
#     puts output
#   elsif input == input.upcase && input.match(/[a-z]|[A-Z]/)
#     puts "Woah, chill out!"
#   elsif input[-1] == '?'
#     puts "Sure."
#   elsif input == ""
#     puts "Fine. Be that way!"
#   else
#     puts "Whatever."
#   end
# end
