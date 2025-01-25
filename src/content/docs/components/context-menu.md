---
title: Context Menu - badge
description: Context Menu is a powerful and flexible way to implement context menu functionality in your app.
---
## Context Menu
Context Menu is a powerful and flexible way to implement context menu functionality in your app.

<div style="display:block;">
    <video controls autoplay loop muted style="width: 30%; height: auto; border-radius: 20px;">
        <source src="/context-menu.mp4" type="video/mp4">
    </video>
</div>

### Description


The `contextMenu` modifier is used to implement context menu allow users to access additional actions or options by long-pressing on a view.

### Usage

To implement context menu functionality, you can use the `contextMenu` modifier on a `View`. The `contextMenu` modifier takes a closure that contains the logic for displaying the context menu.

Here's an example of how to use the `contextMenu` modifier:

```swift
struct ContextMenu: View {
    
    var body: some View {
       Text("Context Menu")
          .contextMenu {
              Button {}
              label: {
                  Label("Add to Favorites", systemImage: "heart")
              }
          }
    }
}
```


### Example

```swift
import SwiftUI

struct ContextMenu: View {
    var body: some View {
        NavigationStack {
            List {
                Section {
                    Text("Context Menu")
                        .contextMenu {
                            Button {
                                
                            } label: {
                                Label("Add to Favorites", systemImage: "heart")
                            }
                        }
                }
                
                Section {
                    Text("Badge")
                        .badge(10)
                }
               
            }
            .navigationTitle("List ")
        }
    }
}
```

## Badge

### Description

The `badge` modifier is used to add a badge to a view. It displays a small number or icon next to the view.

### Usage

To add a badge to a view, you can use the `badge` modifier on a `View`. The `badge` modifier takes a number as an argument.

Here's an example of how to use the `badge` modifier:

```swift
struct ContextMenu: View {
    
    var body: some View {
       Text("Context Menu")
          .badge(10)
    }
}
```

### Example


```swift
import SwiftUI

struct ContextMenu: View {
    var body: some View {
        NavigationStack {
            List {
                Section {
                    Text("Badge")
                        .badge(10)
                }
               
            }
        }
    }
}
```