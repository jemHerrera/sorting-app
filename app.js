new Vue({
    el: "#app",
    data:{
        items:[
            {
                name: "Astronomy Infographic",
                source: "images/astronomy.jpg",
                topic: ["Science"],
                type: ["Informational"],
                theme: ["Dark"],
                link: "pages/astronomy.html"
            },
            {
                name: "Healthy Food and Balanced Diet",
                source: "images/balanced-diet.jpg",
                topic: ["Food", "Health"],
                type: ["Statistical"],
                theme: ["Warm", "Light"],
                link: "pages/balanced-diet.html"
            },
            {
                name: "Blue Light",
                source: "images/blue-light.png",
                topic: ["Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/blue-light.html"
            },
            {
                name: "Smartphone vs Sleep",
                source: "images/blue-light-vs-sleep.png",
                topic: ["Health"],
                type: ["Informational", "Timeline"],
                theme: ["Cool", "Light"],
                link: "pages/blue-light-vs-sleep.html"
            },
            {
                name: "Brain Infographics Elements",
                source: "images/brain-infographics.jpg",
                topic: ["Health", "Science"],
                type: ["Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/brain-infographics.html"
            },
            {
                name: "Business Work Strategy",
                source: "images/business-ideas.jpg",
                topic: ["Business"],
                type: ["Statistical"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-ideas.html"
            },
            {
                name: "Infographic Diagrams",
                source: "images/business-infographic.jpg",
                topic: ["Business"],
                type: ["Process", "Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-infographic.html"
            },
            {
                name: "Chesapeake Bay Crab Pots",
                source: "images/chesapeake-bay.png",
                topic: ["Geagraphy"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/chesapeake-bay.html"
            },
            {
                name: "Inside the Mind of Kanye West",
                source: "images/cool-infographics-inspiration.jpg",
                topic: ["Science", "Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Warm"],
                link: "pages/cool-infographics-inspiration.html"
            },
            {
                name: "Corporate Typography",
                source: "images/corporate-typography.jpg",
                topic: ["Business"],
                type: ["Informational"],
                theme: ["Light"],
                link: "pages/corporate-typography.html"
            },
        ],
        displayedItems:[
            {
                name: "Astronomy Infographic",
                source: "images/astronomy.jpg",
                topic: ["Science"],
                type: ["Informational"],
                theme: ["Dark"],
                link: "pages/astronomy.html"
            },
            {
                name: "Healthy Food and Balanced Diet",
                source: "images/balanced-diet.jpg",
                topic: ["Food", "Health"],
                type: ["Statistical"],
                theme: ["Warm", "Light"],
                link: "pages/balanced-diet.html"
            },
            {
                name: "Blue Light",
                source: "images/blue-light.png",
                topic: ["Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/blue-light.html"
            },
            {
                name: "Smartphone vs Sleep",
                source: "images/blue-light-vs-sleep.png",
                topic: ["Health"],
                type: ["Informational", "Timeline"],
                theme: ["Cool", "Light"],
                link: "pages/blue-light-vs-sleep.html"
            },
            {
                name: "Brain Infographics Elements",
                source: "images/brain-infographics.jpg",
                topic: ["Health", "Science"],
                type: ["Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/brain-infographics.html"
            },
            {
                name: "Business Work Strategy",
                source: "images/business-ideas.jpg",
                topic: ["Business"],
                type: ["Statistical"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-ideas.html"
            },
            {
                name: "Infographic Diagrams",
                source: "images/business-infographic.jpg",
                topic: ["Business"],
                type: ["Process", "Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-infographic.html"
            },
            {
                name: "Chesapeake Bay Crab Pots",
                source: "images/chesapeake-bay.png",
                topic: ["Geagraphy"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/chesapeake-bay.html"
            },
            {
                name: "Inside the Mind of Kanye West",
                source: "images/cool-infographics-inspiration.jpg",
                topic: ["Science", "Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Warm"],
                link: "pages/cool-infographics-inspiration.html"
            },
            {
                name: "Corporate Typography",
                source: "images/corporate-typography.jpg",
                topic: ["Business"],
                type: ["Informational"],
                theme: ["Light"],
                link: "pages/corporate-typography.html"
            },
        ],
        sorting : {
            topic: false,
            type: false,
            colorTheme: false
        },
        appliedFilter: []
    },
    watch:{
        appliedFilter: function(){
            if (this.appliedFilter.length == 0) this.displayedItems = this.items;
            else this.displayedItems = this.items.filter(item => {
                let tags = item.topic.concat(item.type, item.theme);
                let counter = 0;
                for(let filter of this.appliedFilter){
                    if(tags.includes(filter)) counter++;
                }
                return (counter == this.appliedFilter.length);
            });
        }
    },
    methods:{
        changeSorting: function(type){
            let vm = this;
            let active = ""
            Object.keys(this.sorting).forEach(key => {
                if(vm.sorting[key] == true) active = key;
                vm.sorting[key] = false;
            });
            if(active != type){
                setTimeout(function(){
                    vm.sorting[type] = true;
                }, 300)
            } 
        },
        removeFilter: function(filter){
            this.appliedFilter.splice(this.appliedFilter.indexOf(filter), 1);
        },
        applyFilter: function(event){
            if(this.appliedFilter.indexOf(event.target.textContent) == -1)this.appliedFilter.push(event.target.textContent);
        }
    }
});