class Post < ApplicationRecord
  validates :title, presence: true, length: { maximum: 50 }
  validates :content, presence: true, length: { maximum: 2000 }
  belongs_to :user

  # 検索可能な属性を指定
  def self.ransackable_attributes(auth_object = nil)
    %w[title content]
  end

  # 検索可能な関連を指定
  def self.ransackable_associations(auth_object = nil)
    %w[user]
  end
end