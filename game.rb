require 'sinatra'
require 'shotgun'
require 'sinatra/activerecord'

set :database,  "sqlite3:tablescores_db.sqlite3"

class Tablescore < ActiveRecord::Base
end

get "/" do
	erb :index
end

get "/index" do
	erb :index
end

get "/game" do
	erb :game
end

post "/score" do
	Tablescore.create(params)
	redirect '/score'
end

get "/score" do
	@datas=Tablescore.all
	erb :score
end