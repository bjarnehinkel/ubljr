class Race < ApplicationRecord
  has_one_attached :photo

  def self.next_race
    diffs = []
    Race.all.each do |race|
      difference = race.find_diff
      diffs << difference
    end
    min_diff = diffs.delete_if(&:negative?).min
    race = Race.all[diffs.index(min_diff)]
    return race
  end

  def find_diff
    race_date = Date.strptime(start_date, "%d.%m.")
    today = Date.today
    diff = (race_date - today).to_i
    return diff
  end
end
