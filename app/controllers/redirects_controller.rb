class RedirectsController < ApplicationController
  def secret_link
    redirect_to Rails.application.credentials.dig(:external_url, :hidden_link), allow_other_host: true
  end
end