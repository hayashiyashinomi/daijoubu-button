class PagesController < ApplicationController
  def home
    @messages = I18n.t('ok_messages')
  end
end
