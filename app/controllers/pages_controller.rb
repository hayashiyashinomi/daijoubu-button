class PagesController < ApplicationController
  def home
    @messages =
      I18n.available_locales
          .flat_map { |loc| I18n.t("ok_messages", locale: loc, default: []) }
          .map(&:to_s)
          .uniq
  end
end

