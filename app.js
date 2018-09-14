new Vue({
    el: "#app",
    data:{
        pageMaxCount : 6,
        pageAmount : 0,
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
            {
                name: "Cake Chocolate",
                source: "images/creative-food.jpg",
                topic: ["Food"],
                type: ["Informational"],
                theme: ["Light"],
                link: "pages/creative-food.html"
            },
            {
                name: "Hordes for the Holidays",
                source: "images/cyber-monday.jpg",
                topic: ["Business"],
                type: ["Informational", "Statistical"],
                theme: ["Light", "Dark", "Warm", "Cool"],
                link: "pages/cyber-monday.html"
            },
            {
                name: "Dementia: A Public Health Safety",
                source: "images/dementia.jpg",
                topic: ["Health"],
                type: ["Informational"],
                theme: ["Warm", "Cool"],
                link: "pages/dementia.html"
            },
            {
                name: "Education Around the World",
                source: "images/education-around-the-world.png",
                topic: ["Science, Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/education-around-the-world.html"
            },
            {
                name: "Fastfood Infographic",
                source: "images/fast-food-infographic.jpg",
                topic: ["Food", "Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Dark, Warm"],
                link: "pages/fast-food-infographic.html"
            },
            {
                name: "Fastfood Infographics",
                source: "images/fast-food-infographics.jpg",
                topic: ["Food", "Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Warm"],
                link: "pages/fast-food-infographics.html"
            },
            {
                name: "Food Investigation",
                source: "images/food-investigation-infographic.png",
                topic: ["Food"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Light"],
                link: "pages/food-investigation-infographic.html"
            },
            {
                name: "Health Infographics",
                source: "images/health-body.jpg",
                topic: ["Health, Science"],
                type: ["Informational"],
                theme: ["Cool"],
                link: "pages/health-body.html"
            },
            {
                name: "Infographic Health",
                source: "images/health-infographic.jpg",
                topic: ["Health, Science"],
                type: ["Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/health-infographic.html"
            },
            {
                name: "Health Predictions",
                source: "images/health-predictions.jpg",
                topic: ["Health"],
                type: ["Informational", "Process"],
                theme: ["Cool", "Warm"],
                link: "pages/health-predictions.html"
            },
            {
                name: "Healthy Food Infographic",
                source: "images/healthy-food-infographic.jpg",
                topic: ["Health, Food"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Warm", "Dark"],
                link: "pages/healthy-food-infographic.html"
            },
        ],
        displayedItems:[],
        sorting : {
            topic: false,
            type: false,
            colorTheme: false,
        },
        searchActive: false,
        appliedFilter: [],
        search: "",
    },
    mounted(){
        this.pageAmount = Math.floor((this.items.length-1)/this.pageMaxCount)+1;
        for(let i=1; i<=this.pageAmount; i++){
            this.displayedItems.push([]);
            if(i == this.pageAmount){
                for(let j=0; j<=this.pageMaxCount-1; j++){
                    this.displayedItems[i-1].push(this.items[(i-1)*this.pageMaxCount+j]);
                    
                    console.log(this.items[(i-1)*this.pageMaxCount+j].name);
                }
            }
            else for(let j=0; j<=this.pageMaxCount-1; j++){
                this.displayedItems[i-1].push(this.items[(i-1)*this.pageMaxCount+j]);
                console.log(this.items[(i-1)*this.pageMaxCount+j].name);
            }
        }
    },
    watch:{
        appliedFilter: function(){
            this.displayedItems = this.items.filter(item => {
                let tags = item.topic.concat(item.type, item.theme);
                let counter = 0;
                for(let filter of this.appliedFilter){
                    if(tags.includes(filter)) counter++;
                }
                return (counter == this.appliedFilter.length && item.name.toLowerCase().match(this.search.toLowerCase()));
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
        },
        applySearch: function(){
            this.appliedFilter = [];
            console.log(this.search);
            this.displayedItems = this.items.filter((item) => {
                return item.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
});