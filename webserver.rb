#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'

configure do
	mime_type :htc, 'text/x-component'
end

set :public_folder, File.dirname(__FILE__)
set :protection, :except => :frame_options

get '/*.*' do
	params[:splat]
end
