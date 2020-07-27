# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

puts 'deleting races'
Race.destroy_all
puts 'done'

puts 'adding races'
assen = Race.new(name: 'TT Circuit Assen', start_date: '14.08.', end_date: '16.08.', length: '4542', left: '6', right: '12')
assen_track = URI.open('https://res.cloudinary.com/bjarnehinkel/image/upload/v1595839693/UblJr/Tracks/Assen_bogkfl.png')
assen.photo.attach(io: assen_track, filename: 'assen_track.png', content_type: 'image/png')
assen.save!

sachsen = Race.new(name: 'Sachsenring', start_date: '07.09.', end_date: '08.09.', length: '3670', left: '10', right: '3')
sachsen_track = URI.open('https://res.cloudinary.com/bjarnehinkel/image/upload/v1595840650/UblJr/Tracks/sachsenring_i8t45f.png')
sachsen.photo.attach(io: sachsen_track, filename: 'sachsen_track.png', content_type: 'image/png')
sachsen.save!

lausitz = Race.new(name: 'Lausitzring', start_date: '11.09.', end_date: '13.09.', length: '4530', left: '8', right: '5')
lausitz_track = URI.open('https://res.cloudinary.com/bjarnehinkel/image/upload/v1595840663/UblJr/Tracks/lausitz_hxdq6y.png')
lausitz.photo.attach(io: lausitz_track, filename: 'lausitz_track.png', content_type: 'image/png')
lausitz.save!

hock = Race.new(name: 'Hockenheimring', start_date: '25.09.', end_date:'27.09.', length: '4570', left: '7', right: '10')
hock_track = URI.open('https://res.cloudinary.com/bjarnehinkel/image/upload/v1595840672/UblJr/Tracks/hockenheim_foq8go.png')
hock.photo.attach(io: hock_track, filename: 'hock_track.png', content_type: 'image/png')
hock.save!

Race.all.each do |race|
  puts "added #{race.name}"
end

puts 'finished'
