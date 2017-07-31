(ns my-project.records)

(defrecord Author
    [name
     born
     died
     occupation
     nationality
     citizenship
     genre
     notable-works
     spouse
     no-of-children
     ])


(def doyle
  (->Author
   "Arthur Ignatius Conan Doyle"
   "22-May-1859"
   "7-July-1930"
  ["novelist" "short story writer" "poet" "physician"]
   "scottish"
      "United Kingdom"
  ["Detective fiction", "fantasy", "science fiction", "historical novels", "non-fiction"]
  ["Stories of Sherlock Holmes" "The Lost World"]
  ["Louisa Hawkins" "Jean Leckie"]
   5
   ))

(:name doyle)
