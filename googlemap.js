Module.register("googlemap",{
// var x = {
    // Default module config.
    defaults: {
		baseurl: 'https://www.google.com/maps/embed/v1/directions?key=',
		width: '600',
		height: '400',
		interval: 60000,
		days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
		startHour: 0,
        startMinute: 0,
        endHour: 23,
        endMinute: 59,
        hideOffHours: true
	},

	start: function() {
		var self = this;
		setInterval(function(){

			if (self.isAppropriateTime()) {
				console.log('appropriate time - update dom');
				self.updateDom();
			} else {
				if (self.config.hideOffHours) {
					console.log('inappropriate time - hide dom');
					self.updateDom();
				} else {
					console.log('inappropriate time - stay as is');
					return;
				}
			}

		}, this.config.interval)
	},

    getDom: function() {
		if (this.isAppropriateTime()) {
			console.log('running update');
			return this.createIFrame();
		} else {
			console.log('running not update');
			return document.createElement('div');
		}
	},

	createIFrame: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = this.config.style;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src = this.buildMapsUrl();
		return iframe;
	},

	buildMapsUrl: function() {
		return this.config.baseurl + this.config.apikey + '&origin=' + this.config.origin + '&destination=' + this.config.destination;
	},

	isAppropriateTime: function() {
		if (this.config.days 
			&& this.config.startHour !== undefined 
			&& this.config.startMinute !== undefined 
			&& this.config.endHour !== undefined 
			&& this.config.endMinute !== undefined) {

			var date = new Date();

			var day = this.getDayString();

			var appropriateDay = this.config.days && this.config.days.includes(day);
			
			var appropriateTimeStart = date.getHours() > this.config.startHour 
			|| (date.getHours() == this.config.startHour && date.getMinutes() >= this.config.startMinute);

			var appropriateTimeEnd = date.getHours() < this.config.endHour 
			|| (date.getHours() == this.config.endHour && date.getMinutes() <= this.config.endMinute);

			return appropriateDay && appropriateTimeStart && appropriateTimeEnd
		}

		return true;
	},

	getDayString: function() {
		const date = new Date();
		switch(date.getDay()) {
			case 1:
				return 'mon';
			case 2:
				return 'tue';
			case 3:
				return 'wed';
			case 4:
				return 'thu';
			case 5:
				return 'fri';
			case 6:
				return 'sat';
			case 0:
				return 'sun';
		}
	}
});
// };