require 'pry'
#
# You're a top developer at a cyber-security firm. You have been sent a file from an anonymous source with information about Melbourne's most wanted. You need to take the drug information from the file and ** read its contents into a 2d array ** so that you can work with the data in your program.
#
# The file is attached below.
#
# customer,product,cost per unit,units
# Alica Brereton,Marijuana,9.18,50
# William Kotai,ecstasy,19.12,20
# Joel Forro,heroin,91.16,5
# David Ernest,Methamphetamine,108.78,5
# David Ernest,cocaine,80,2
# Joel Forro,ecstasy,19.12,10
# Gabriella Hyde,Marijuana,9.18,10
# Gabriella Hyde,Methamphetamine,108.78,8


array = []

filename = 'source_file.txt'  #ARGV[0]

file = File.open(filename).each do |line|
  array.push(line.chomp)
end

array
array.each_slice(1).to_a

binding.pry
