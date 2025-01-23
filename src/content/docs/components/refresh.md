---
title: Pull to refresh - refreshable
description: SwiftUI provides a powerful and flexible way to implement pull-to-refresh functionality in your app.
---

SwiftUI provides a powerful and flexible way to implement pull-to-refresh functionality in your app.

## Description

The `refreshable` modifier is used to implement pull-to-refresh functionality in your app. It allows users to refresh data in your app by swiping down on a list or a scrollable view.

## Example

<div class="video-container">
    <video controls autoplay loop style="width: 40%; height: auto;">
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

