---
title: Pull to refresh - refreshable
description: SwiftUI provides a powerful and flexible way to implement pull-to-refresh functionality in your app.
---

SwiftUI provides a powerful and flexible way to implement pull-to-refresh functionality in your app.

## Description

The `refreshable` modifier is used to implement pull-to-refresh functionality in your app. It allows users to refresh data in your app by swiping down on a list or a scrollable view.

## Usage

To implement pull-to-refresh functionality, you can use the `refreshable` modifier on a `List` or `ScrollView`. The `refreshable` modifier takes a closure that contains the logic for refreshing the data.

Here's an example of how to use the `refreshable` modifier:

```swift
List {
    // List content
}
.refreshable {
    // Refresh logic
}
```


## Example

<div style="display:block;">
    <video controls autoplay loop style="width: 30%; height: auto; border-radius: 20px;">
        <source src="/refresh.mp4" type="video/mp4">
    </video>
</div>

```swift
import SwiftUI

struct PullToRefresh: View {
    
    @State private var listColors: [RowStyle] = [
        RowStyle(color: .red)
    ]
    
    var body: some View {
        NavigationStack {
            List {
                ForEach(listColors, id: \.color) { item in
                    HStack {}
                        .listRowBackground(item.color)
                }
            }
            .navigationTitle("Pull to Refresh")
            .refreshable {
                await refreshAction()
            }
        }
    }
    
    func refreshAction() async {
      // Simulate a network request
        do {
            try await Task.sleep(nanoseconds: 1_000_000_000 * 2)
            let color = RowStyle(color: .random())
            listColors.append(color)
        } catch {
            print("Refresh error")
        }
    }
}
```

